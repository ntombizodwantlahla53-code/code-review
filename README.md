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

(.env)
DB_USER= postgres
DB_HOST=localhost
DB_DATABASE=code-review
DB_PASSWORD=....01
DB_PORT=5432
PORT=3000