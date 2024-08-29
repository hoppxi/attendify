# SQL Directory

This directory contains SQL scripts for setting up and managing the database for the project.

## Files

- `create_database.sql`: Contains SQL statements for creating the main database and use it.
- `schema.sql`: Contains SQL statements for creating tables and setting up the initial database schema.
- `seed.sql`: Includes SQL statements for inserting initial data into the database.
- `migrations/`: Contains migration scripts for evolving the database schema over time.

## How to Use

1. **Set Up Database:**
   ```bash
   mysql -u <username> -p <database_name> < sql/schema.sql
   ```

2. **Seed Database:**
   ```bash
   mysql -u <username> -p <database_name> < sql/seed.sql
   ```

3. **Apply Migrations:**
   ```bash
   mysql -u <username> -p <database_name> < sql/migrations/2024-08-29-create-users-table.sql
   ```

Replace `<username>` and `<database_name>` with your MySQL username and database name.

## Notes

- For development, it's recommended to run the `schema.sql` and `seed.sql` files to get a fresh setup.