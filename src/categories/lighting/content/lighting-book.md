---
permalink: /light-book/
title: The Light Book [by Graham Reid Phoenix]
date: 2022-05-15

description: 'As a designer, I worked with light in the way I felt about life. I was concerned with the connection between visible light and our inner experience of light. What we do speaks to our inner souls. The work we do displays much of who we are.'
excerpt: 'As a designer, I worked with light in the way I felt about life. I was concerned with the connection between visible light and our inner experience of light. What we do speaks to our inner souls. The work we do displays much of who we are.'
firstPara: 'I became involved in lighting in the theatre, because I wanted to get involved in what people saw, how they saw things and how they felt about it. Lighting not only enables vision in a physical sense, but it also underlines the vision people have for their lives. It underlaid the vision I had for my life.'

image: 
  alt: light banner
  copyright: Sat Purusha
  copyrightLink: 
  link: 
  name: https://ucarecdn.com/c0941ee7-c3f3-4138-a1c0-9e7cc59e4545/
  source: Sat Purusha

---

## Light

Light helps people to understand buildings and the spaces they live in. It helps them not just to see their way around them, but to understand their nature, their form, their use, what they are for and what they are about. Buildings are accentuated by light, as are our lives. Light is about emotion, whether it is the more obvious manipulation that happens in the theatre, or the more subtle results of great architectural lighting.

From within, not from behind, a light shines through us onto things. It makes us aware that we are nothing, but the light is all. We are casting the shadow obscuring what we are looking at, or creating the light that illuminates the world around us. Light opens up everything, and we fool ourselves if we think the world is revealed just by our own efforts. It is also revealed by something greater inside us.

{% import "partials/macros.njk" as macro with context %}

{% for image in lightingBook %}
  {{ macro.imagePage(
    filename = image.link,
    title = image.title,
    projects = image.projects,
    text = image.text
  ) }}
{% endfor %}
