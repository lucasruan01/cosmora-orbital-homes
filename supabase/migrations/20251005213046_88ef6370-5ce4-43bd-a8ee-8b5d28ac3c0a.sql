-- Fix CRITICAL security issue: Restrict profiles table to user-specific access only
-- The current policy "Profiles are viewable by everyone" with USING (true) 
-- exposes all user profile data (names, IDs) to anyone on the internet
-- 
-- This migration:
-- 1. Drops the overly permissive public SELECT policy
-- 2. Creates a new policy allowing users to only view their own profile

-- Drop the insecure public read policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON profiles;

-- Create secure policy: users can only view their own profile
CREATE POLICY "Users can view their own profile" 
ON profiles 
FOR SELECT 
USING (auth.uid() = user_id);