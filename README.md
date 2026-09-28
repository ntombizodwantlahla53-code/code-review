CREATE TABLE applications (
id SERIAL PRIMARY KEY,
company_name VARCHAR(50) NOT NULL,
job_title VARCHAR(100) NOT NULL,
status application_status NOT NULL DEFAULT 'Applied',
applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

![alt text](<Screenshot (1797).png>)
![alt text](<Screenshot (1798).png>)
![alt text](<Screenshot (1799).png>)

npm i jsonwebtoken bcryptjs
npm i -D @types/jsonwebtoken @types/bcryptjs

CREATE TABLE users (
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password_hash VARCHAR(255) NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE applications
ADD COLUMN user_id INTEGER;

ALTER TABLE applications
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE;

