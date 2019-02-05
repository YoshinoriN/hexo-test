---
title: "MathJax test"
date: 2019-02-05 23:07:05
tags:
---

test for hexo-math

<!--more-->

# inline
----

Simple inline $a = b + c$.

# block
----

$$\frac{\partial u}{\partial t}
= h^2 \left( \frac{\partial^2 u}{\partial x^2} +
\frac{\partial^2 u}{\partial y^2} +
\frac{\partial^2 u}{\partial z^2}\right)$$


# tag
----

{% math %}
\begin{aligned}
\dot{x} & = \sigma(y-x) \\
\dot{y} & = \rho x - y - xz \\
\dot{z} & = -\beta z + xy
\end{aligned}
{% endmath %}