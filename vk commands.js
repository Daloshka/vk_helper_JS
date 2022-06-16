Select all BUTTONS

document.querySelectorAll('.friends_deny_request').length
a[i].click()


# ОСТАВЛЯЕТ В ПОДПИСЧИКАХ

a = document.querySelectorAll('.friends_deny_request')
for (let i = 0; i < document.querySelectorAll('.friends_deny_request').length; i++) { // выведет 0, затем 1, затем 2
  a[i].click()
}
  

# УДАЛЯЕТ ИСХОДЯЩИЕ ЗАЯВКИ В ДРУЗЬЯ

b = document.querySelectorAll('.FlatButton')
for (let i = 4; i < document.querySelectorAll('.FlatButton').length; i++) { // выведет 0, затем 1, затем 2
  b[i].click()
}


# ДОСТАЁТ ID УЧАСТНИКОВ ГРУППЫ

b = document.querySelectorAll("#results > div > div.info > div.labeled.name > a")
ids = []
for (let i = 4; i < document.querySelectorAll('.FlatButton').length; i++) { // выведет 0, затем 1, затем 2
  id = b[i].href.split('/')[3]
  result.push(id)
}
