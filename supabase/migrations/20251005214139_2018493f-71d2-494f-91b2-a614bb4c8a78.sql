-- Create profile tests table to store user submissions
CREATE TABLE public.profile_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  essay TEXT NOT NULL,
  research_area TEXT NOT NULL,
  dome_size TEXT NOT NULL CHECK (dome_size IN ('small', 'medium', 'large')),
  character_count INTEGER NOT NULL,
  ai_score INTEGER CHECK (ai_score >= 0 AND ai_score <= 10),
  ai_feedback TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profile_tests ENABLE ROW LEVEL SECURITY;

-- Users can insert their own tests
CREATE POLICY "Users can insert their own profile tests"
ON public.profile_tests
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can view their own tests
CREATE POLICY "Users can view their own profile tests"
ON public.profile_tests
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_profile_tests_updated_at
BEFORE UPDATE ON public.profile_tests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();