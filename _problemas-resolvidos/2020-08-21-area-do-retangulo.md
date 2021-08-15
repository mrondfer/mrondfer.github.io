---
title: Área do retângulo
excerpt: "Área do retângulo."
classes: wide
date: 2020-08-21
header:
    teaser: /assets/imagens/img-area-do-retangulo.png
mathjax: true
categories:
    - Problemas resolvidos
tags: [problema, matemática, área, retângulo, triângulo retângulo, teorema de Pitágoras]
last_modified_at: 2020-08-21
---

**Problema.** Sejam dois quandrados dispostos conforme a [Figura 1](#figura). Determine a área do retângulo em destaque.


<!--<a id = "figura">
    ![img-area-do-retangulo]({{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-retangulo.png){: .align-center}
</a>-->

<a id = "figura"></a>
<figure style="width: 300px" class="align-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-retangulo.png" alt="">
    <figcaption >Figura 1.</figcaption>
</figure>


**Solução.** Vamos adotar a notação na [Figura 2](#figura2). Conseguimos calcular a área do retângulo $NOPQ$, em vermelho, determinando as medidas dos lados $\overline{NO}$ e $\overline{NQ}$. Um deles é facilmente obtido, pois corresponde ao lado do quadrado $MCNO$. De fato, aplicando o teorema de pitágoras no triângulo $MBC$, temos

$$\overline{MC}^{\,2} = 2^2 + 4^2$$

$$\overline{MC}   = \sqrt{20}$$

$$\overline{MC}   = 2\sqrt{5}.$$


<a id = "figura2"></a>
<figure style="width: 300px" class="align-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/imagens/img2-area-do-retangulo.png" alt="">
    <figcaption >Figura 2.</figcaption>
</figure>

<!--
<a ind = "figura2">
    ![img-area-do-retangulo]({{ site.url }}{{ site.baseurl }}/assets/imagens/img2-area-do-retangulo.png){: .align-center}
</a>-->

Note que a área do triângulo $MCD$ na [Figura 3](#figura3) é $\mathsf{S} = 8$, pois tem um base $\overline{CD} = 4$ e altura $\overline{BC} = 4$. Por outro lado, calculando a área do mesmo triângulo $MCD$ em relação a base $MC$, temos

$$\mathsf{S} = \frac{\overline{MC}\cdot h}{2}$$

$$8 = \frac{2\sqrt{5}\cdot h}{2} \to h = \frac{8}{\sqrt{5}}$$

$$h = \frac{8\sqrt{5}}{5}.$$

<a id = "figura3"></a>
<figure style="width: 300px" class="align-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/imagens/img3-area-do-retangulo.png" alt="">
    <figcaption >Figura 3.</figcaption>
</figure>

<!--
<a ind = "figura3">
![img-area-do-retangulo]({{ site.url }}{{ site.baseurl }}/assets/imagens/img3-area-do-retangulo.png){: .align-center}
</a>-->

Como $\overline{CN} = \overline{CM} = 2\sqrt{5}$, segue

$$\overline{NQ} = \overline{CN} - \overline{CQ}$$

$$\overline{NQ} = 2\sqrt{5} - \frac{8\sqrt{5}}{5}$$

$$\overline{NQ} = \frac{2\sqrt{5}}{5}.$$

Portanto, a área do retângulo $NOPQ$ será

$$\mathsf{S_R} = \overline{NO} \cdot \overline{NQ}$$

$$\mathsf{S_R} = 2\sqrt{5} \cdot \frac{2\sqrt{5}}{5}$$

$$\mathsf{S_R} = 4.$$