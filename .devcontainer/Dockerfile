# ARG VARIANT="14-buster"
# FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

FROM node:18-alpine

RUN sudo apk add --no-cache zsh
RUN sudo apk add --no-cache htop
RUN sudo apk add --no-cache lsof
RUN sudo apk add --no-cache jq
RUN sudo apk add --no-cache git
RUN sudo apk add --no-cache zsh-syntax-highlighting

RUN sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
RUN echo "source /usr/share/zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ~/.zshrc
RUN echo 'RPROMPT="[🐳 %M 🐳]"' >> ~/.zshrc

WORKDIR /code


ENTRYPOINT ["zsh"]
