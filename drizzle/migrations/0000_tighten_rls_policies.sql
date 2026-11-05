DROP POLICY IF EXISTS "Authenticated members can read insider notes" ON public.insider_notes;
CREATE POLICY "Signed-in members can read insider notes" ON public.insider_notes
FOR SELECT TO authenticated USING (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;
CREATE POLICY "Anyone can subscribe with a valid email" ON public.newsletter_subscribers
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(email) BETWEEN 5 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND is_active = true
  AND char_length(source) <= 50
);