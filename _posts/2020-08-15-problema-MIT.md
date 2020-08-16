---
title: Torneio de Harvard - MIT
mathjax: true
---

# Problema  

No quadrilátero $\mathsf{ABCD}$, $\mathsf{D\hat{A}C = 98^\circ}$, $\mathsf{D\hat{B}C = 70^\circ}$ e $\mathsf{BC = AD}$. Encontre $\mathsf{A\hat{C}D}$.  

**Solução.**
Aplicando a lei dos senos nos triângulo BCD, temos  

$$\mathsf{\frac{\overline{CD}}{\sin ~ 82^\circ} = \frac{\overline{BC}}{\sin ~ 28^\circ}}.$$

Como $\mathsf{BC = AD}$, temos que

<!--- $$\mathsf{ \frac{\overline{CD}}{\sin ~ 82^\circ} = \frac{\overline{BC}}{\sin ~ 28^\circ} = \frac{\overline{AD}}{\sin ~ 28^\circ} }.$$ --->

\begin{equation}\label{eq:1}
\mathsf{ \frac{\overline{CD}}{\sin ~ 82^\circ} = \frac{\overline{BC}}{\sin ~ 28^\circ} = \frac{\overline{AD}}{\sin ~ 28^\circ} }.
\end{equation}

Aplicando novamente a lei dos senos, mas agora no triângulo ACD, segue que

$$\mathsf{ \frac{\overline{AD}}{\sin ~ A\hat{C}D} = \dfrac{\overline{CD}}{\sin ~ 98^\circ}}.$$

Agora, note que a soma de $\mathsf{98^\circ}$ com $\mathsf{82^\circ}$ é igual a $\mathsf{ 180^\circ }$. Isso quer dizer que eles correspondem a medidas de ângulos suplementares. Daí,

$$\mathsf{ \sin~82^\circ = \sin~98^\circ }$$  

e
<!--- $$\mathsf{ \frac{\overline{AD}}{\sin ~ A\hat{C}D} = \frac{\overline{CD}}{\sin ~ 98^\circ} = \frac{\overline{CD}}{\sin ~ 82^\circ} }.$$ --->

\begin{equation}\label{eq:2}
\mathsf{ \frac{\overline{AD}}{\sin ~ A\hat{C}D} = \frac{\overline{CD}}{\sin ~ 98^\circ} = \frac{\overline{CD}}{\sin ~ 82^\circ} }.
\end{equation}

Portanto, das equações \eqref{eq:1} e \eqref{eq:2} , concluímos que

$$\mathsf{A\hat{C}D = 28^\circ}.$$