-- Create a table for contact messages
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policies for contact messages
CREATE POLICY "Anyone can create contact messages" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only admins can view contact messages" 
ON public.contacts 
FOR SELECT 
USING (
  auth.jwt() ->> 'email' IN (
    'admin@ongdeci.com',
    'contact@ongdeci.com', 
    'ongdeci@yahoo.fr'
  )
);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contacts_updated_at
BEFORE UPDATE ON public.contacts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();