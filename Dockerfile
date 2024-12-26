# Use Nginx Alpine as the base image
FROM IMAGENAME

# Copy your index.html file to the default Nginx HTML directory
COPY index.html /usr/share/nginx/html
