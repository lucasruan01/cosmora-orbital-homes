-- Add UPDATE policy for profile_tests table
-- Allows users to update their own test results if needed
CREATE POLICY "Users can update their own profile tests"
ON public.profile_tests
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);