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
last_modified_at: 2020-08-20
---

**Problema.** Considere dois quadrado colados, como mostrado na figura abaixo. Determine a área do triângulo em destaque.

![img-area-do-triangulo]({{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo.png){: .align-center}

**Solução.** Antes de calcular a área do triângulo em destaque, vamos chamar o lado do quandrado maior de $x$ e considerar $x>\sqrt{2}$.

Agora, observe que a área total da figura acima é igual soma das áreas dos quadrados, ou seja,

$$A_{total} = x^2 + 2.$$

Para determinarmos a área do triângulo em destaque, basta subtrair da área total a área dos outros triângulo menores, ([cf. a figura](/assets/imagens/img-area-do-triangulo2.png)),

![img-area-do-triangulo2]({{ site.url }}{{ site.baseurl }}/assets/imagens/img-area-do-triangulo2.png){: .align-center}

que são dadas por:

* $A_1 = 1 u.a;$

* $A_2 = \dfrac{x(x+\sqrt{2})}{2} = \dfrac{x^2+\sqrt{2}x}{2}\, u.a;$

* $A_3 = \dfrac{x(x-\sqrt{2})}{2} = \dfrac{x^2-\sqrt{2}x}{2}\, u.a.$

Assim, segue que

$$A_T = A_{total} - A_1 - A_2 - A_3$$

$$A_T = x^2 + 2 -1 - \frac{(x^2+\sqrt{2}x)}{2} - \frac{(x^2-\sqrt{2}x)}{2}.$$

$$A_T = x^2 + 1 - \frac{x^2}{2} - \frac{\sqrt{2}\,x}{2} - \frac{x^2}{2} + \frac{\sqrt{2}x}{2}.$$

Portanto,

$$A_T = 1.$$
