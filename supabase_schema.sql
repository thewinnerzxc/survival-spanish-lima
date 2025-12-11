-- Create the table for leads
create table public.spanish_leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  whatsapp text not null,
  arrival_date text,
  english_level text,
  priority_topic text,
  source text
);

-- Enable Row Level Security (RLS)
alter table public.spanish_leads enable row level security;

-- Create a policy to allow anonymous users to insert data
create policy "Allow anonymous inserts"
on public.spanish_leads
for insert
to anon
with check (true);

-- Create a policy to allow service role (and dashboard) to view data
-- (By default, service role bypasses RLS, but it's good practice to be explicit if needed, 
-- though usually for SELECT we might want to restrict anon)
create policy "Allow service role to view"
on public.spanish_leads
for select
to service_role
using (true);
