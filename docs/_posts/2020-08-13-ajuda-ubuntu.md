# AJUDA UBUNTU

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## 1. INSTALAÇÃO LATEX  

```sh
sudo apt-get install texlive texlive-latex-extra texlive-lang-portuguese
sudo apt-get install texlive-math-extra
sudo apt-get install tex-common ps2eps latex-xcolor luatex
sudo apt-get install abntex latex-beamer latex2html latex2rtf
```

ou

```sh
sudo apt-get install texmaker
sudo apt-get install ibus-qt4  //para corrigir bug da acentuação
```


## 2. DICIONÁRIO TEXMAKER
Instale o pacote myspell-pt-br:

```sh
$ sudo apt-get install myspell-pt-br
```

No Texmaker, acesse **Options -> Configure Texmaker**, e na aba Editor selecione o dicionário pt_BR.dic que se encontra no diretório `/usr/share/hunspell`
Para os caracteres, lembrar de usar: `ISO-8859-15`.


## 3. LYX
Baixa o instalador **.tar.gz** no baixaki, instala o pacote abaixo:

```sh
sudo apt-get install libqt4-dev
./configure -enable-build-type=release
make
sudo make install
```

## 4. MATLAB 2012:

```sh
sudo mount -t iso9660 -o loop ml2012au.iso /home/marleson/montar
sudo /home/marleson/matlab/install
sudo sh /usr/local/MATLAB/R2012a/bin/matlab
```

No mainmenu: `/usr/local/MATLAB/R2012a/bin/matlab -desktop`

Detalhes aqui: http://www.youtube.com/watch?v=EyEcAeQ2waA

**Biblioteca importante: (`libc-2.15.so` pode estar em lugar diferente)**

**Em 64bits:**

```sh
sudo ln -s /lib/x86_64-linux-gnu/libc-2.15.so /lib64/libc.so.6
```

**Em 32bits:**

```sh
sudo ln -s /lib/i386-linux-gnu/libc-2.15.so /lib/libc.so.6
```

## 5. MAPLE 13

```sh
sudo sh Maple13LinuxX86_64Installer.bin
/media/CAF8EC6AF8EC566B/torrents/Maple13
```

## 6. INSTALANDO JAVA DA ORACLE NO UBUNTU 12.04

```sh
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-jdk7-installer
```

## 7. INSTALAÇÃO DO WINE

Antes disso, lembrar de fazer: `sudo apt-get -u upgrade`

```sh
sudo add-apt-repository ppa:ubuntu-wine/ppa -y && sudo apt-get update
sudo apt-get install wine
```

## 8. INSTALAÇÃO DO FREEFEM++

```sh
sudo tar zxvf freefem++-v3.6-ubuntu.tar.gz -C /                     (BAIXAR PACOTE)
sudo tar zxvf freefem++-v3.2-usr-lib.tar.gz -C / -k                 (BAIXAR PACOTE)
```

Para executar um arquivo: `FreeFem++ file.edp`

`nedit -import edp.nedit` (primeiro baixar o arquivo edp.nedit em: http://www.freefem.org/ff++/ff++/)

*Dá para instalar o highlight do Vim por esse link.*


## 9. Outra instalação do FREEFEM++: (Recomendado)

```sh
sudo apt-get install bison curl flex g++ gfortran libx11-dev libice-dev libsm-dev libxau-dev libxdmcp-dev libxrender-dev libxft-dev libxext-dev libxpm-dev libxt-dev m4 make mesa-common-dev libglu1-mesa-dev patch wget mpi-default-bin mpi-default-dev cmake bzip2
```

Entre na pasta onde está o pacote descompactado **`(freefem++-3.19-1)`**  e digite:

```sh
./configure --enable-download  (observar os erros que aparecem e instalar os pacotes restantes)
make
sudo make install
```

### 9.1 Converter malha no FreeFem++

```sh
cvmsh2 gm4092.amdba golfo.msh -g geogolfo.geo
```


## 10. INSTALAÇÃO DO CINNAMON

```sh
sudo add-apt-repository ppa:merlwiz79/cinnamon-ppa
sudo add-apt-repository ppa:gwendal-lebihan-dev/cinnamon-stable (de preferência)
sudo apt-get update
sudo apt-get install cinnamon
```
* Para remover
    ```sh  sudo apt-get install ppa-purge
    sudo apt-get purge --auto-remove cinnamon
    sudo apt-get autoremove
    sudo ppa-purge ppa:gwendal-lebihan-dev/cinnamon-stable
    ```

Copiar temas para a pasta `/usr/share/themes` (dar acesso aos arquivos usando: `sudo nautilus`)

## 11. INSTALAR O CHROME

Baixe o arquivo **.deb** na página do Google Chrome [LINK]

**64 bits:**

```sh
sudo apt-get install libnspr4-0d libnss3-1d libxss1 libcurl3
sudo dpkg -i Downloads/google-*
```

## 12. EXECUTAR ARQUIVOS .DEB
1. Abra o terminal:
**Ubuntu:** `Aplicativos > Acessórios > Terminal`
2. Vá até o local onde se encontra o arquivo **.deb**.
3. Execute o comando:
    ```sh
    $ sudo dpkg -i nome_arquivo.deb
    ```

## 13. APAGAR UMA PASTA

```sh
rm -R <diretorio>       (Faz perguntas antes de remover)
rm -rf <diretorio>      (Não faz perguntas antes de remover)
```

## 14. LISTAR DIRETÓRIO

```sh
ls -lah   (mostra arquivos em KB, MB, etc)
```

## 15. EDITAR .bashrc

Esse arquivo (*.bashrc*) está na pasta: `\~`.
Para editar digite^*^:
```sh
vim .bashrc
```
Para atualizar:
```sh
source .bashrc
```
*Vim precisa estar instalado (`sudo apt-get install vim`).

## 16. INSTALAR ADOBE FLASH PLAYER

I am using this few steps:

Download flash player **.tar.gz**

Extract it and you can see usr and **libflashplayer.so**

Now open terminal and use this command (in folder where you have extracted usr and libflash...) for copy usr folder:

```sh
sudo cp -r usr/* /usr
```

Copy **libflashplayer.so to** `/usr/lib/firefox-addons/plugins` with this command (in folder where you have extracted usr and libflash...)

**For Firefox:**

```sh
sudo cp libflashplayer.so /usr/lib/firefox-addons/plugins
```

**For Chromium:**
```sh
sudo cp libflashplayer.so /usr/lib/chromium-browser/pepper/
```

Para ver: chrome://plugins

## 17. MODELLUS

Site para instalação:
http://modellus.co/index.php?option=com_content&view=category&layout=blog&id=10&Itemid=102&lang=en

------------------------------------------------------------------

OUTROS COMANDOS
===============
1. `sudo su` (entra como root)

2. `sudo chmod +x ./install`

3. `sudo nautilus`  (dá acesso total)

4. `sudo dpkg -i Downloads/nomedoarquivo`  (instalar pacote .deb)

5. `tar -zxvf nome_do_pacote.tar.gz`  (descompacta arquivo tar.gz)

6. Para encontrar um frase (ou expressão) em arquivos dentro de uma pasta, entre na pasta desejada:
  > ```sh
  > cd /home/$USER/folder
```
  > e aqui digite o comando abaixo:
  >  ```sh
  find ./* -type f -exec grep -l palavra-ou-expressao-a-pesquisar {} \;
  ```

7. `evince [nomedoarquivo.x]`  (visualizador de arquivos)

8. `$ grep -rin "STRING" ./*`   (Localiza a "string" na pasta local)

9. Reinicia o computador: `shutdown -r now`

10. Desliga o computador: `shutdown -h now`

11. Permissão de um arquivo:
```sh
$ chmod 751 <nome da pasta ou arquivo.extensão>
```
0 = Nenhuma permissão  
1 = Apenas execução  
2 = Apenas gravação  
3 = Execução e gravação  
4 = Apenas leitura  
5 = Execução e leitura  
6 = Leitura e gravação  
7 = Todos; leitura, gravação e execução

>  Permission          |    rwx
>  ------------------- | --------
>  7 full              |    111
>  6 read and write    |    110
>  5 read and execute  |    101
>  4 read only         |    100
>  3 write and execute |    011
>  2 write only        |    010
>  1 execute only      |    001
>  0 none              |    000

------------------------------------------------------------------

12. `ps` (mostra os processos)
13. `top` (mostra os processos continuamente)
  * Comandos:
      * M – Porcentagem de memória
      * N – Número de identificação de processo
      * P – Porcentagem de uso de UCP
      * T – Tempo de utilização da UCP

14. `kill "PID"` (encerra o processo com determinado PID)


15. Para deixar o texto no **Terminal do Ubuntu Colorido**, digite:
```sh
sudo gedit ~/.bashrc
```
procure pela linha `#force_color_prompt=yes` e tire o símbolo `#`. Lembre de atualizar: `$ source .bashrc`.

------------------------------------------------------------------

DICAS
=====


**1)** Você pode agendar um download após o outro criando 1 arquivo com todas as URLs desejadas. Crie um arquivo texto ***"qualquer-nome.txt"*** assim:

> http://www.../arquivo01.tgz  
> http://www.../arquivo02.tgz  
> http://www.../arquivo03.tgz  
> ...  
> http://www.../arquivo50.tgz  

E depois rode o wget assim:
```sh
wget -c -i lista qualquer-nome.txt
```

Ou seja, parâmetro `-i` seguido do nome do arquivo com as URLs.

**2)** Para gerenciar downloads pelo terminal, use:
```sh
$ wget -c -b [url]
```

O parametro `-c` serve para armazenar o download e reiniciar de onde parou;
o parametro `-b` serve para executar o download em background, sem ocupar o terminal.

**3)** Imprimindo pelo Terminal:

* Imprimir um texto: ```sh $ lp documento.txt ```
* Conhecer o nome da impressora: ```sh $ lpstat -p -d ```
* Imprimir em outra impressora: ```sh $ lp -d nomedaimpressora documento.txt ```
* Imprimir duas cópias: ```sh $ lp -n 2 documento.txt```
* Ver a fila de impressão: ```sh $ lpq```
* Imprimir páginas 1 e 3 do documento: ```sh $ lp -P 1,3 documento.txt```

**4)** Copiando arquivos para/do o servidor:
```sh
 $ scp arquivo.txt marleson@hunter.mat.ufrgs.br:~
 $ scp marleson@hunter.mat.ufrgs.br:~/arquivo.txt
 $ scp -r marleson@hunter.mat.ufrgs.br:~/diretorio
 ```
 * Copiando um arquivo simples de uma máquina para outra
    ```sh
    servidor1$ scp maluco@servidor2.example.com:~/arquivo.txt ./
    ```
O comando acima copia o ***arquivo.txt*** do HOME (`~`) do usuário maluco, do **servidor2** para o diretório atual do **servidor1**. Bem parecido com o comando `cp`.

 * Copiando todo um diretório de uma máquina para outra
    ```sh
    servidor1$ scp -r maluco@servidor2.example.com:/home/maluco /tmp
    ```
    Ou seja, copia o diretório maluco do **servidor2** para a **máquina atual**, no diretório `/tmp`.
    ```sh
    servidor1$ scp -Cpr maluco@servidor2.example.com:/home/maluco /tmp
    ```
    O parâmetro `-C` agora faz a mesma ação anterior, só que agora compactando os dados antes de enviar pela rede. O *ssh* usa formato *gzip* e pode-se usar essa opção caso se queira economizar na banda de rede.
    O parâmetro `-p` preserva todos modos e timestamps de arquivos, ideal para fazer uma cópia mais exata.


**5)** Comando Convert para imagens:

- Converte figuras:
```sh
convert arq1.jpg arq1.gif
```
- Para converter várias imagens numa pastas, use:
```sh
mogrify -density 150 -format jpg *.eps
```
- Para fazer autocrop:
```sh
convert imagem_input.png -trim imagem_output.png
```
***Comentário:*** Para recortar e manter o mesmo nome:
```sh
for file in *.png; do convert -trim $file $file; done
```
```sh
for file in *.png; do convert -crop 929x288+310+0 $file $file; done
```
*Fonte:* (https://linuxacademy.com/blog/linux/cropping-multiple-images-the-same-way-short-tutorial/)

**6)** Malha GMSH para FreeFem++:
```sh
gmsh -2 -format mesh -string 'Mesh.SaveElementTagType=2;' -o oblong.3.mesh oblong.geo

gawk -f 3to2.awk oblong.3.mesh > oblong.mesh
```

**7)** Sincronizar arquivos com o HD externo:
```sh
rsync -av --update --delete --progress /home/marleson/ /media/3f72032c-ace3-44f5-af47-8082aa3d523b/Backup/
rsync -av --update --progress /home/marleson/ /media/3f72032c-ace3-44f5-af47-8082aa3d523b/Backup/

rsync -av --update --progress /home/marleson/Documents/ajudaubuntu.txt marleson@hunter.mat.ufrgs.br:~/ajudaubuntu.txt

rsync -av --update --progress marleson@hunter.mat.ufrgs.br:/home/marleson/Dissertação/Dissertação
/home/marleson/Documents/MESTRADO\ EM\ MATEMÁTICA/
```

**8)** Remover um pacote:
```sh
sudo apt-get --purge remove <package>
```

**9)** Programas em Segundo Plano:

Comandos  | Descrição
--------- | ----------
&         | Deixa em segundo plano. Caso o processo já esteja em execução, pressione `CTRL + z`.
bg        | Visualiza o que há em segundo plano;
fg        | Retoma o processo ao primeiro plano com o num. fornecido pelo comando `bg`.



**10)** Nohup

Pra rodar um comando em background e fazer com que o mesmo fique imune a sinais de hangup, usa-se o comando nohup.
Exemplo de uso:
```sh
$ nohup ./comando_que_vai_demorar &
```
- Para calcular o tempo do comando:
```sh
$ nohup bash -c "(time ./malha_read malhaquad2.msh)" -print > file.out &
$ nohup bash -c "(time ./malha_read mal\lim_{\dot{\gamma}\rightarrow 0}haquad2.msh) &> timeuse.txt" &
```

*Tips:*
* http://www.phas.ubc.ca/~mbelab/computer/linux-intro/html/long-calculations.html
* http://unix.stackexchange.com/questions/22992/how-to-limit-the-number-of-lines-a-commands-output-has-available-in-bash

**11)** Alterar tela de fundo do login:
```sh
sudo -i
xhost +SI:localuser:lightdm
su lightdm -s /bin/bash

$ gsettings set com.canonical.unity-greeter draw-user-backgrounds 'false'
$ gsettings set com.canonical.unity-greeter background '/Caminho-da-imagem.png'
```
Para retirar os pontinhos colocados pelo Ubuntu depois de executado os passos acima, digite:
```sh
$ gsettings set com.canonical.unity-greeter draw-grid 'false'
```

**12)** Redefinir tela de login:
```sh
sudo dpkg-reconfigure lightdm
```


**13)** Compartilhar pasta no virtual box linux:

Os passos são quase iguais ao caso anterior, escolha as pastas a serem compartilhadas em `Configurações > Pastas Compartilhadas`. Ligue a máquina, e acesse `Dispositivos > Instalar Adicionais para Convidado`.
Acesse a unidade de CD que foi criada e execute o arquivo.
```sh
$ sh ./VBoxLinuxAdditions*.run
```
Crie a pasta a ser montada:
```sh
$ sudo mkdir /mnt/nome_pasta
```
Montando:
```sh
$ sudo mount -t vboxsf nome_pasta_compartilhada /mnt/nome_pasta
```

**14)** Matlab no Terminal:
```sh
matlab -nodesktop -nosplash < /path_to_file_location/test_run -logfile test_run.log
```    

`-nosplash` impede que a tela inicial apareça.


**15)** Download Vídeos do Youtube:
* Download:
```sh
sudo apt-get install youtube-dl ffmpeg lame libavcodec-extra-53
```
Command to download youtube video:
```sh
youtube-dl -o nome_do_seu_video.flv http://www.youtube.com/watch?v=CódigoDoVideo
```

* If you want to download with the best quality (add `-b`):
```sh
youtube-dl -b -o nome_do_seu_video.flv http://www.youtube.com/watch?v=CódigoDoVídeo
```


* If you want to check the available formats:
```sh
youtube-dl -F http://www.youtube.com/watch?v=wUln3JuE7iU
```
The result will be a list, like that:

num   | Available formats:
----| -----------------
22	|	mp4	[720x1280]
45	|	webm	[720x1280]
34	|	flv	[360x640]
18	|	mp4	[360x640]
43	|	webm	[360x640]
5	  |	flv	[240x400]
17	|	mp4	[144x176]

For example, let's download the version flv [360x640], use the command:

```sh
youtube-dl -f 34 http://www.youtube.com/watch?v=wUln3JuE7iU
```

* To convert a YouTube video to mp3, runing this command on terminal:
```sh
youtube-dl youtube-url --extract-audio --audio-format mp3
```
**Example:**
```sh
youtube-dl -o filename.ext http://www.youtube.com/watch?v=QGJuMBdaqIw --extract-audio --audio-format mp3
ffmpeg -i filename.mp4 OneMoreNight.mp3
ffmpeg -i Input.mp4 -vcodec libx264 -vprofile baseline -preset slow -b:v 500k -maxrate 500k -bufsize 500k -vf scale=-1:360 -threads 0 -acodec libfdk_aac -b:a 96k Output.mp4
```

* To download a list of video files, create a file and place all the YouTube links that you wish to download:
```sh
youtube-dl -a youtube_links.txt
```

* Convert mov to mp4 :
```sh
ffmpeg -i MVI_8298.MOV -strict -2  output.mp4
```

**16)** Instalação do Eclipse para c++:
```sh
$ sudo apt-get install eclipse-cdt
$ sudo apt-get install libgtkmm-2.4-1c2a libgtkmm-2.4-dev build-essential
```

**17)** Gravar comandos num arquivo de texto:
```sh
$ script arquivo.txt
```
Após este comando imediatamente é iniciada uma sessão para gravar os comandos. Para terminar a gravação pressione `CTRL+D`. Para continuar gravando no mesmo arquivo utilize o seguinte comando:
```sh
$ script -a arquivo.txt
```

**18)** Abrir terminal por uma pasta:
Instale pelo synaptic: `Nautilus-Open-Terminal`

*Terminator:*
https://askubuntu.com/questions/76712/setting-nautilus-open-terminal-to-launch-terminator-rather-than-gnome-terminal


**19)** Instalando Plugins no Rhythmbox:
to add my PPA:
```sh
sudo add-apt-repository ppa:fossfreedom/rhythmbox-plugins
sudo apt-get update
```
If you want to install all the plugins:
```sh
sudo apt-get install rhythmbox-plugin-complete
```

**20)** Change Swappiness Value
1. Run terminal
2. Enter following line to see current swappiness value
```sh
cat /proc/sys/vm/swappiness
```
(default value in Ubuntu for swappiness is 60)
3. Open file /etc/sysctl.conf in a text editor, I did
```sh
gedit /etc/sysctl.conf
```
4. Enter the following parameter
```sh
# Decrease swappiness value
vm.swappiness=10
```
5. Save the file and restart the computer

**21)** Conversar via terminal:

Caso não esteja na mesma máquina, acesse remotamente via ssh e digite:  
`who`   (para ver quem está disponível)  
`write <nomeuser> pts/0` (para começar a escrever)  
`CTRL + d` (para enviar o sinal que terminou de digitar)  


**22)** Inverter caracters:
```sh
echo texto-a-ser-invertido | rev
```

**23)** Senha do Licc:  
```sh
    yppasswd
```

**24)** Instalação CS:

```sh
sudo apt-get install wine1.3
```

- Instale via wine:
```sh
cs16full_v4+zbot.exe
CS16patch_full_V23.exe
ZBot - SITECS.exe
```

**25)** Fontes da Microsoft

Procure no synaptic: `ttf-mscorefonts-installer`

**26)** Times New Roman em Latex:

http://www.radamir.com/tex/ttf-tex.html  
https://pt.overleaf.com/learn/latex/Font_typefaces

Coloque a font tahoma na pasta c:/windows/fonts

**Alguns comandos:**  
```sh
bot_add_ct
bot_add_tr
bot quota 20
restart 1
mp_freezetime 6
mp_roundtime 5
mp_timelimit 0
cl_righthand_1

nmap 127.0.0.1
ipfw
```

**27)** HABILITAR FORTRAN NO CODEBLOCKS:

Abra: `Settings > Compiler e Debugger`

Selected compiler:`Gfortran`  
Na aba *Toolchain Executables*, escolha:
Compiler's installation directory: `/usr/bin`

```
C Compiler:                 gfortran
C++ Compiler:               gfortran
Linker for dynamic libs:    gfortran
Debugger:                   ar
Make program:               gfortran
```

**28)** HABILITAR COMPARTILHAMENTO DE PASTA (LINUX <-> WINDOWS)

```sh
sudo add-apt-repository ppa:samba-team/ppa && sudo apt-get update
#sudo apt-get install system-config-samba
sudo apt-get install samba          (ou busque por SAMBA, na Central de Programas)
sudo apt-get install apache2.2-bin libapache2-mod-dnssd
```

The two packages you need to install to activate that are: `apache2` `libapache2-mod-dnssd`

Open `Applications -> Accessories -> Terminal` and at prompt enter: `sudo gedit /etc/samba/smb.conf`  
– Uncomment the line `browseable = yes` (don't forget to use find and search for browseable)  
– Uncomment the line `writable = no` and change "no" to `yes`  
– Save the file and close  
– Go back to the Terminal window and enter the following command (remember you can use any name you want): `sudo smbpasswd -a username`  
– When prompted, enter a password and confirm it.  
– Reload the Samba services using the following command: `sudo /etc/init.d/samba reload`

http://www.watchingthenet.com/enable-file-sharing-in-ubuntu-using-samba.html

**29)** MOSTRAR TODA INFO DO NOTE

```
sh sudo lshw
```

**30)** ALTERAR RESOLUÇÃO DE VÍDEO

```sh
# Para listar as Resoluções Disponíveis:
xrandr ou xrandr -q

# Para definir uma Resolução... segue um exemplo:
xrandr -s 1920x1080
```


**31)** INSTALAR ICONES FAENZA

```sh
sudo add-apt-repository ppa:tiheum/equinox
sudo apt-get update
sudo apt-get install faenza-icon-theme
```
Depois de baixado e instalado, temos que usar o Gnome Tweak Tool:

```sh
sudo apt-get install gnome-tweak-tool
```

**32)** INSTALANDO PATHOGEN.VIM

Para instalar o `Pathogen.vim`, basta executar o comando abaixo no terminal:

```sh
mkdir -p ~/.vim/autoload ~/.vim/bundle; \
curl -Sso ~/.vim/autoload/pathogen.vim https://raw.github.com/tpope/vim-pathogen/master/autoload/pathogen.vim
```

Este comando cria duas pastas (autoload e bundle) dentro da pasta *.vim* (se a pasta *.vim* não existir ela é criada), entre dentro da pasta *~/.vim/autoload* e faça o download do arquivo *pathogen.vim* via *curl* do repositório remoto no [GitHub][GitHubPage].

**Obs.:** Se estiver utilizando Windows substitua no comando acima a ocorrência `~/.vim` por `~\vimfiles`.

Agora temos que adicionar a linha abaixo no arquivo `~/.vimrc`:
```sh
execute pathogen#infect()
```

Com essa linha adicionada no `~/.vimrc` o *Pathogen.vim* manipula em tempo real o caminho dos plugins que você adicionar para o *Vim*. Agora precisamos testar se o *Pathogen.vim* está funcionado, então vamos instalar o plugin *Emmet.vim* dentro da arquitetura de pasta do *Pathogen.vim*.

---------------------------------------------------
33) Instalar o Emmet.vim utilizando o Pathogen.vim
---------------------------------------------------
cd ~/.vim/bundle; \
git clone https://github.com/mattn/emmet-vim.git

O plugin Emmet.vim já está instalado, para atualizar execute o comando abaixo:

cd ~/.vim/bundle/emmet-vim; \
git pull

---------------------------------------------------
34) Corrigir imagem Webcam Black&White
---------------------------------------------------
Instalar 'Video4Linux Control Painel' (ou biblioteca v4l)

---------------------------------------------------
35) My Weather Indicator
---------------------------------------------------
To install it in Ubuntu 14.04, use the following commands:
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install my-weather-indicator

---------------------------------------------------
36) Pidgin Indicator
---------------------------------------------------
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update
sudo apt-get install pidgin-indicator

---------------------------------------------------
37) Gnuplot syntax highlighting gedit
---------------------------------------------------
To extension .plt;
Now, to install the gnuplot style sheet, download the XML file first: gnuplot.lang
https://wiki.gnome.org/Projects/GtkSourceView/LanguageDefinitions?action=AttachFile&do=get&target=gnuplot.lang
sudo cp gnuplot.lang /usr/share/gtksourceview-3.0/language-specs/
sudo chmod 644 /usr/share/gtksourceview-3.0/language-specs/gnuplot.lang

Now restart gedit and you should be able to choose gnuplot highlighting.

---------------------------------------------------
38) Install gnuplot
---------------------------------------------------
Installation for Gnuplot Version 4.6 patchlevel 5 with wxt terminal is necessary to add the libraries:
sudo apt-get install build-essential (for c++)
libwxgtk2.8-dev
libcairo2-dev
libpangomm-1.4-dev
before to run ./configure > make > sudo make install.

---------------------------------------------------
39) Download all files in a directory using WGET
---------------------------------------------------
To download all files in the directory using WGET in Linux, the following command can be used

wget -H -r --level=1 -k -p http://www.tldp.org/HOWTO/Serial-Programming-HOWTO/

-r, –recursive
Specify recursive download.
-l, –level=NUMBER
Maximum recursion depth (inf or 0 for infinite).
-k, –convert-links
Make links in downloaded HTML point to local files.
-p, –page-requisites
Get all images, etc. needed to display HTML page.

---------------------------------------------------
40) Replacing all occurrences of one string
---------------------------------------------------
Substitui a string "palavravelha" pela string "palavranova" em todos os arquivo encontrados.
Inclusive nos arquivos escondidos em subdiretórios.

Comando: find . -type f -exec sed -i 's/palavravelha/palavranova/g' {} +

Existe ainda uma forma mais simples, a nao-recursiva. Para sustituir em todos os arquivos.
Por exemplo:  sed -i -- 's/palavravelha/palavranova/g' *

ou em um único arquivo.
Por exemplo:  sed -i -- 's/palavravelha/palavranova/g' file.txt

-------------------------------------------------------
41) UNIX setup SSH with DSA public key authentication
-------------------------------------------------------
In the current user, type:
	ssh-keygen -t dsa
	(do not put password in this process, just press enter key)
Now copy file ~/.ssh/id_dsa.pub on Machine #1 to remote server (cluster) as ~/.ssh/authorized_keys:
	scp ~/.ssh/id_dsa.pub user@jerry:.ssh/
In the remote server, enter in the directory ".ssh":
	cd ~/.ssh
and rename
	cat id_rsa.pub >> authorized_keys

done!

-------------------------------------------------------
42) Shortcut configuration
-------------------------------------------------------
You can set up a connection shortcut by creating a ~/.ssh/config file on your local computer and adding your server and key details by using a text editor.
Add the following text to the ~/.ssh/config file, changing the values to match your server information:

Host shortcutName
HostName serverAddressOrIPAddress   
User remoteUsername
IdentityFile /path/to/appropriate/ssh/rsa/private/key

Each entry describes a feature of the server:

Host: A shortcut name you will use to tell SSH to use this connection
HostName: The address of the server you will connect to
User: The name of the user account to connect to on the server
IdentityFile: The location of the private key file (id_rsa)

After you set up the config file, connect to the server by using your shortcut name with SSH, as follows:
ssh shortcutName

-------------------------------------------------------
43) Matplotlib (Library to python)
-------------------------------------------------------
http://nbviewer.ipython.org/github/sukhbinder/VisualizationInPython/blob/master/Quick%20Intro%20to%20%202D%20and%203D%20Visualization%20in%20Python.ipynb

-------------------------------------------------------
44) Linux com SSD
-------------------------------------------------------
http://www.mysolutions.it/linux-ssd-solid-state-drive/
http://www.edivaldobrito.com.br/como-ativar-o-trim-em-discos-ssd-no-ubuntu-linux/

-------------------------------------------------------
45) Montar cartão SD:
-------------------------------------------------------
Antes de espetar o SD Card no notebook digite:

# modprobe mmc_block
# modprobe wbsd

Daí abra o messages num terminal:

# tail -f /var/log/messages

Plugue o card e verifique qual dispositivo foi encontrado. Daí é só montar, ex:

# mount /dev/mmcblk0p1 /mnt

-------------------------------------------------------
46) Exfat on SDXC cards
-------------------------------------------------------
sudo add-apt-repository ppa:relan/exfat (probably not necessary)
sudo apt-get update
sudo apt-get install exfat-fuse exfat-utils

-------------------------------------------------------
47) Alguns maneiras de reiniciar o wifi
-------------------------------------------------------
sudo service networking restart
sudo /etc/init.d/networking restart

sudo ifconfig wlan0 down
sudo ifconfig wlan0 up
 (you need to replace 'wlan0' by the correct name of your wireless)

sudo service network-manager restart

---------------------------------------------------
48) Backup antes de fazer uma atualização de UBUNTU
---------------------------------------------------
FONTE: http://www.diolinux.com.br/2014/01/aptik-faca-backup-dos-seus-temas-ppas-e.html

sudo apt-add-repository -y ppa:teejee2008/ppa
sudo apt-get update
sudo apt-get install aptik

---------------------
49) Latex to Inkscape
---------------------

`sudo apt-get install pstoedit`

Talvez seja necessário insatalar alguns módulos, por exemplo:

* Se o Inkscape rodar com pythom 3, faça:

`sudo apt-get install python3-lxml`  
e/ou  
`sudo apt-get install python3-tk`

----------------
50) Recuperar SD
----------------

sudo apt-get install testdisk
sudo testdisk

http://sejalivre.org/recuperando-cartao-sd-danificado-no-ubuntu/

----------------------
51) Formatar pendrive
----------------------

mkfs.vfat -I /dev/sdc

https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2011/12/como-formatar-um-pen-drive-no-terminal-do-linux.html

-------------------------------------------
52) Instalando GSL (GNU Scientific Library)
-------------------------------------------
Baixar: GSL-2.5 (ou superior)
./configure
make
make install


Pacotes adicionais:
sudo apt-get install libgsl2 libgsl-dbg libgsl-dev

-------------------------------------------
52) Como encontrar pacotes pendentes
-------------------------------------------
sudo apt-get install apt-file

apt-file search Qt5CoreConfig.cmake



================================================================================
http://www.marcosmonteiro.com.br/index.php?option=com_content&view=article&id=656:como-compartilhar-pastas-em-rede-entre-linux-e-windows&catid=41:so-gnu-linux&Itemid=69

http://forum.gamevicio.com/topico/2009/07/counter-strike-1-6-radio-nao-funciona/
http://br.answers.yahoo.com/question/index?qid=20080825044829AAMjLJQ

passwd: flaviono9

http://mirnazim.org/writings/vim-plugins-i-use/



m4s5ho0w_http://www.phyast.pitt.edu/~zov1/


Dw5No41aa1

http://people.clarkson.edu/~jhowell/math/

[GitHubPage]: https://github.com/
