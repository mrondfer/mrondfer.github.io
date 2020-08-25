---
title: Área constante de um triângulo
excerpt: "Área de um triângulo."
classes: wide
date: 2020-08-20
header:
    teaser: /assets/imagens/img-area-do-triangulo.png
mathjax: true
categories:
    - Problemas resolvidos
tags: [problema, matemática, área, triângulo]
last_modified_at: 2020-08-22
---

**Problema.** Considere dois quadrado "colados", como mostrado na [Figura 1](#figura1). Determine a área do triângulo em destaque.

<a id = "figura1"></a>
<figure style="width: 300px" class="align-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo.png" alt="">
    <figcaption >Figura 1.</figcaption>
</figure>

<!--![img-area-do-triangulo]({{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo.png){: .align-center}-->

**Solução.** Antes de calcular a área do triângulo, vamos denotar por $x$ a medida do lado do quandrado maior. Além disso, para os cálculos devemos assumir $x>\sqrt{2}$.

Agora, observe que a área total da figura é igual a soma das áreas dos quadrados, ou seja,

$$A_{total} = x^2 + 2.$$

Para determinarmos a área do triângulo desejada, basta subtrair da área total a área dos triângulo menores $A_1$, $A_2$ e $A_3$ (veja a [Figura 2](#figura2)) que são dadas por:

* $A_1 = 1;$

* $A_2 = \dfrac{x(x+\sqrt{2})}{2} = \dfrac{x^2+\sqrt{2}x}{2};$

* $A_3 = \dfrac{x(x-\sqrt{2})}{2} = \dfrac{x^2-\sqrt{2}x}{2}.$

<a id = "figura2"></a>
<figure style="width: 300px" class="align-center">
    <img src="{{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo2.png" alt="">
    <figcaption >Figura 2.</figcaption>
</figure>

<!--
<a id="figura2">
    ![img-area-do-triangulo2]({{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo2.png){: .align-center}
</a>-->



Assim, segue que

$$A_T = A_{total} - A_1 - A_2 - A_3$$

$$A_T = x^2 + 2 -1 - \frac{(x^2+\sqrt{2}x)}{2} - \frac{(x^2-\sqrt{2}x)}{2}$$

$$A_T = x^2 + 1 - \frac{x^2}{2} - \frac{\sqrt{2}\,x}{2} - \frac{x^2}{2} + \frac{\sqrt{2}x}{2}.$$

Portanto,

$$A_T = 1 \, u.a,$$  

onde $u.a$ significa __unidade de área__.