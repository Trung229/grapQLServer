FROM node:16

WORKDIR /usr/local/app_BE

COPY . .

RUN npm install

RUN echo HAPPY_TO_CODE_WITH_TRUNG_PHAM

RUN echo yarn --version

EXPOSE 3001

CMD ["yarn","start"]