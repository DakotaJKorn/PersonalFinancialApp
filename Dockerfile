FROM python:latest

COPY /dist/front-end .

EXPOSE 8000

CMD python -m http.server 8000