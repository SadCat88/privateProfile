# Личное дело

**GitHub Pages:**<br>
https://sadcat88.github.io/privateProfile/app/prod/<br>

## Описание:
В проекте используется компонентная архитектура, <br>
а точней вольная интерпретация методологии БЭМ. <br>

<br>
Во время разработки я исходил из того, что анкета является родительским блоком.<br>
Остальные блоки имеют смысл только в контексте родителя. <br>
По этой причине я не стал использовать большое количество модификаторов, <br>
а сделал отдельный файл со стилями для описания внешнего вида блоков и элементов.<br>

<br>
**theme.scss**<br>
Файл стилей с внешним оформлением.<br>
Если его отключить, все блоки останутся на своих местах, <br>
но оформление будет взято из браузерных стилей.

<br>
файлы имеют расширение .jade потому что в vsCode так лучше работает автозаполнение путей.<br>

<br>
Во время сборки в режиме development происходит автоматическая проверка HTML на валидность.<br>