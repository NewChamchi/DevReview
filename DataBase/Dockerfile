# Use the official image as a parent image.
FROM mysql:8.0

# Set the working directory.
WORKDIR /app

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD my-secret-pw
ENV MYSQL_DATABASE testdb
ENV MYSQL_USER testuser
ENV MYSQL_PASSWORD testpass

# Add initialization SQL script
ADD ./init.sql /docker-entrypoint-initdb.d/

# Expose ports.
EXPOSE 3306

# Run the specified command within the container.
CMD ["mysqld"]