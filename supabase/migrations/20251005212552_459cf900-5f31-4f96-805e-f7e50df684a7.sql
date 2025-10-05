-- Fix security issue: Remove public read access to newsletter_subscribers table
-- The application only needs INSERT access for newsletter signups
-- No code reads from this table, so SELECT policy is unnecessary

DROP POLICY IF EXISTS "Users can view their own subscription" ON newsletter_subscribers;