-- WORLDS TABLE
CREATE TABLE worlds (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  visual_meta JSONB
);

-- WORLD SESSIONS TABLE
CREATE TABLE world_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  world_id UUID REFERENCES worlds(id) ON DELETE CASCADE,
  joined_at TIMESTAMP DEFAULT NOW(),
  last_ping TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- USER PROGRESS TABLE
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  xp INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  daily_streak INTEGER DEFAULT 0,
  last_check_in DATE,
  total_pomos_completed INTEGER DEFAULT 0,
  total_tasks_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- FOLDERS TABLE
CREATE TABLE folders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  description TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  visual_meta JSONB
);

-- NOTES TABLE
CREATE TABLE notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  content TEXT,
  parent_note_id UUID REFERENCES notes(id) ON DELETE SET NULL,
  folder_id UUID REFERENCES folders(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP,
  metadata JSONB
);

-- TASKS TABLE
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  status TEXT,
  due_date DATE,
  pomodoro_count INTEGER DEFAULT 0,
  note_id UUID REFERENCES notes(id) ON DELETE SET NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- HABITS TABLE
CREATE TABLE habits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  scheduled_days TEXT,
  streak INTEGER DEFAULT 0,
  last_completed DATE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- AGENTS TABLE
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  description TEXT,
  context_scope TEXT,
  folder_id UUID REFERENCES folders(id) ON DELETE SET NULL,
  short_term_memory TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- MESSAGES TABLE
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  receiver_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  world_id UUID REFERENCES worlds(id) ON DELETE SET NULL,
  content TEXT,
  sent_at TIMESTAMP DEFAULT NOW(),
  is_read BOOLEAN DEFAULT FALSE,
  reply_to_id UUID REFERENCES messages(id) ON DELETE SET NULL
);

-- VECTORS COLUMNS
CREATE EXTENSION IF NOT EXISTS vector;
ALTER TABLE notes ADD COLUMN title_embedding VECTOR(1536);
ALTER TABLE notes ADD COLUMN content_embedding VECTOR(1536);