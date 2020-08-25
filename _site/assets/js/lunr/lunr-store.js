var store = [{
        "title": "Um problema do torneio de Harvard - MIT",
        "excerpt":"Problema. No quadrilátero $\\mathsf{ABCD}$, $\\mathsf{D\\hat{A}C = 98^\\circ}$, $\\mathsf{D\\hat{B}C = 70^\\circ}$ e $\\mathsf{\\overline{BC} = \\overline{AD} }$. Encontre $\\mathsf{A\\hat{C}D}$.        Solução. Aplicando a lei dos senos nos triângulo BCD, temos   \\[\\mathsf{\\frac{\\overline{CD}}{sen ~ 82^\\circ} = \\frac{\\overline{BC}}{sen ~ 28^\\circ}}.\\]  Como $\\mathsf{ \\overline{BC} = \\overline{AD} }$, temos que     \\begin{equation}\\label{eq:1} \\mathsf{ \\frac{\\overline{CD}}{sen ~ 82^\\circ} = \\frac{\\overline{BC}}{sen ~ 28^\\circ} = \\frac{\\overline{AD}}{sen ~ 28^\\circ} }. \\end{equation}   Aplicando novamente a lei dos senos, mas agora no triângulo ACD, segue que   \\[\\mathsf{ \\frac{\\overline{AD}}{sen ~ A\\hat{C}D} = \\dfrac{\\overline{CD}}{sen ~ 98^\\circ}}.\\]  Agora, note que a soma de $\\mathsf{98^\\circ}$ com $\\mathsf{82^\\circ}$ é igual a $\\mathsf{ 180^\\circ }$. Isso quer dizer que eles correspondem a medidas de ângulos suplementares. Daí,   \\[\\mathsf{ sen~82^\\circ = sen~98^\\circ }\\]  e    \\begin{equation}\\label{eq:2} \\mathsf{ \\frac{\\overline{AD}}{sen ~ A\\hat{C}D} = \\frac{\\overline{CD}}{sen ~ 98^\\circ} = \\frac{\\overline{CD}}{sen ~ 82^\\circ} }. \\end{equation}   Portanto, das equações \\eqref{eq:1} e \\eqref{eq:2} , concluímos que   \\[\\mathsf{A\\hat{C}D = 28^\\circ}.\\] ","categories": ["Problemas resolvidos"],
        "tags": ["problema","matemática","triângulo","trigonometria","lei dos senos","ângulos suplementares"],
        "url": "http://localhost:4000/problemas-resolvidos/2020-08-15-problema-MIT/",
        "teaser": "http://localhost:4000/assets/imagens/img-torneio-mit.png"
      },{
        "title": "Área constante de um triângulo",
        "excerpt":"Problema. Considere dois quadrado “colados”, como mostrado na Figura 1. Determine a área do triângulo em destaque.               Figura 1.     Solução. Antes de calcular a área do triângulo, vamos denotar por $x$ a medida do lado do quandrado maior. Além disso, para os cálculos devemos assumir $x&gt;\\sqrt{2}$.   Agora, observe que a área total da figura é igual a soma das áreas dos quadrados, ou seja,   \\[A_{total} = x^2 + 2.\\]  Para determinarmos a área do triângulo desejada, basta subtrair da área total a área dos triângulo menores $A_1$, $A_2$ e $A_3$ (veja a Figura 2) que são dadas por:           $A_1 = 1;$            $A_2 = \\dfrac{x(x+\\sqrt{2})}{2} = \\dfrac{x^2+\\sqrt{2}x}{2};$            $A_3 = \\dfrac{x(x-\\sqrt{2})}{2} = \\dfrac{x^2-\\sqrt{2}x}{2}.$                   Figura 2.     Assim, segue que   \\[A_T = A_{total} - A_1 - A_2 - A_3\\]  \\[A_T = x^2 + 2 -1 - \\frac{(x^2+\\sqrt{2}x)}{2} - \\frac{(x^2-\\sqrt{2}x)}{2}\\]  \\[A_T = x^2 + 1 - \\frac{x^2}{2} - \\frac{\\sqrt{2}\\,x}{2} - \\frac{x^2}{2} + \\frac{\\sqrt{2}x}{2}.\\]  Portanto,   \\[A_T = 1 \\, u.a,\\]  onde $u.a$ significa unidade de área.  ","categories": ["Problemas resolvidos"],
        "tags": ["problema","matemática","área","triângulo"],
        "url": "http://localhost:4000/problemas-resolvidos/2020-08-20-area-do-triangulo/",
        "teaser": "http://localhost:4000/assets/imagens/img-area-do-triangulo.png"
      },{
        "title": "Área do retângulo",
        "excerpt":"Problema. Sejam dois quandrados dispostos, como na Figura 1. Determine a área do retângulo em destaque.                 Figura 1.   Solução. Considere a notação na Figura 2. A área do retângulo $NOPQ$, em vermelho, é determinada conhecendo as medidas de seus lados. Uma delas é facilmente obtida, pois corresponde ao lado do quadrado $MCNO$. Com efeito, aplicando o teorema de pitágoras no triângulo $MBC$, temos que   \\[\\overline{MC}^{\\,2} = 2^2 + 4^2\\]  \\[\\overline{MC}   = \\sqrt{20}\\]  \\[\\overline{MC}   = 2\\sqrt{5}.\\]              Figura 2.     Note que a área do triângulo $MCD$ na Figura 3 é $\\mathsf{S} = 8$, pois tem um base $\\overline{CD} = 4$ e altura $\\overline{BC} = 4$. Por outro lado, calculando a área do mesmo triângulo $MCD$ em relação a base $MC$, conseguimos obter o valor de $h = \\overline{CQ}$. De fato,   \\[\\mathsf{S} = \\frac{\\overline{MC}\\cdot h}{2}\\]  \\[8 = \\frac{2\\sqrt{5}\\cdot h}{2} \\to h = \\frac{8}{\\sqrt{5}}\\]  \\[h = \\frac{8\\sqrt{5}}{5}.\\]              Figura 3.     Como $\\overline{CN} = \\overline{CM} = 2\\sqrt{5}$, temos que   \\[\\overline{NQ} = \\overline{CN} - \\overline{CQ}\\]  \\[\\overline{NQ} = 2\\sqrt{5} - \\frac{8\\sqrt{5}}{5}\\]  \\[\\overline{NQ} = \\frac{2\\sqrt{5}}{5}.\\]  Portanto, a área do retângulo será   \\[\\mathsf{S_R} = \\overline{NO} \\cdot \\overline{NQ}\\]  \\[\\mathsf{S_R} = 2\\sqrt{5} \\cdot \\frac{2\\sqrt{5}}{5}\\]  \\[\\mathsf{S_R} = 4.\\] ","categories": ["Problemas resolvidos"],
        "tags": ["problema","matemática","área","retângulo","triângulo retângulo","teorema de Pitágoras"],
        "url": "http://localhost:4000/problemas-resolvidos/2020-08-21-area-do-retangulo/",
        "teaser": "http://localhost:4000/assets/imagens/img-area-do-retangulo.png"
      },{
        "title": "Test - Plotly",
        "excerpt":"       ","categories": [],
        "tags": ["matemática","plotly","gráficos"],
        "url": "http://localhost:4000/tutoriais/2020-08-17-teste-plotly/",
        "teaser": null
      },{
        "title": "Teste código SVG",
        "excerpt":"      &lt;/svg&gt;  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/tutoriais/test-SVG/",
        "teaser": null
      }]
