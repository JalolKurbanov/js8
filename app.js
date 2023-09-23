function info(name,bir,now) {
    return (name+', ваш возраст '+(now-bir))
}
alert(info(prompt('Ваше имя'),+prompt('Ваш год рождения'),+prompt('Нынешний год')))