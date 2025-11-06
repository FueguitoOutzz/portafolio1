# Usamos Nginx Alpine por su ligereza
FROM nginx:alpine

# Copiamos la carpeta 'assets', el 'index.html' y el 'README.MD'
# El "." se refiere a la carpeta local (el repositorio clonado)
COPY . /usr/share/nginx/html

# Nginx corre en el puerto 80 por defecto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]