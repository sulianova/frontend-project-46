# Difference Calculator

[![Actions Status](https://github.com/sulianova/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/sulianova/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/41cac6cc9df76252fd7a/maintainability)](https://codeclimate.com/github/sulianova/frontend-project-46/maintainability)
[![Jest](https://github.com/sulianova/frontend-project-46/actions/workflows/jest.yml/badge.svg)](https://github.com/sulianova/frontend-project-46/actions/workflows/jest.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/41cac6cc9df76252fd7a/test_coverage)](https://codeclimate.com/github/sulianova/frontend-project-46/test_coverage)

## Description
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:
* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json
## Install
```
git clone git@github.com:sulianova/frontend-project-46.git
cd frontend-project-46
make install
npm link
```
## Usage
```
gendiff [options] <filepath1> <filepath2>
```
## Options
* `-h, --help` справочная информация
* `-f, --format` выбор формата для вывода различий
* `-V, --version` версия утилиты
## Formatters
* `stylish` форматер по умолчанию
* `plain` вывод результата в формате plain
* `json` вывод результата в формате json

### Stylish
Диф строится на основе того, как файлы изменились относительно друг друга, ключи выводятся в алфавитном порядке.
```
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```
Отсутствие плюса или минуса говорит, что ключ есть в обоих файлах, и его значения совпадают. Во всех остальных ситуациях значение по ключу либо отличается, либо ключ есть только в одном файле. В примере выше ключ setting3 есть в обоих файлах, но имеет разные значения, setting2 находится только в file1, а follow только в file2.

### Plain
Диф строится на основе того, как файлы изменились относительно друг друга, ключи выводятся в алфавитном порядке.
```
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```
Если новое значение свойства является составным, то пишется [complex value]
Если свойство вложенное, то отображается весь путь до корня, а не только с учетом родителя, например выше это: common.setting6.ops.
