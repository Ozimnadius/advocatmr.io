//popups.js
const popup = $('.popup'),
    popupWrapper = popup.find('.popup__wrapper');

$.validator.methods.tel = function (value, element) {
    let re = new RegExp(/\d/g),
        str = value.match(re);

    if (str.length == 11) {
        return true;
    } else {
        return false;
    }
};

const formsData = {
    '1': {
        href: 'ajax.php',
        title: 'Задать вопрос',
        sub: 'Мы с радостью ответим на интересующие вопросы и поможем найти оптимальное решение ',
        fields: [
            {
                title: 'ФИО*',
                type: 'text',
                name: 'name',
                placeholder: 'Ваше Имя'
            },
            {
                title: 'Номер*',
                type: 'tel',
                name: 'tel',
                placeholder: '+7(__) ___-__-__'
            },
            {
                title: 'E-mail',
                type: 'email',
                name: 'email',
                placeholder: 'Ваш email'
            },
            {
                title: 'Напишите свой вопрос',
                type: 'textarea',
                name: 'comment',
                placeholder: 'Ваше сообщение'
            }
        ]
    },
    '2': {
        href: 'ajax.php',
        title: 'Заказать звонок',
        sub: 'Укажите ваше имя и контактный номер и наши специалисты позвонят Вам',
        fields: [
            {
                title: 'ФИО*',
                type: 'text',
                name: 'name',
                placeholder: 'Ваше Имя'
            },
            {
                title: 'Номер*',
                type: 'tel',
                name: 'tel',
                placeholder: '+7(__) ___-__-__'
            },
            {
                title: 'Комментарий',
                type: 'textarea',
                name: 'comment',
                placeholder: 'Ваше сообщение'
            }
        ]
    },
    '3': {
        href: 'ajax.php',
        title: 'Получить консультацию',
        sub: 'Укажите ваше имя и контактный номер и наши специалисты позвонят Вам',
        fields: [
            {
                title: 'ФИО*',
                type: 'text',
                name: 'name',
                placeholder: 'Ваше Имя'
            },
            {
                title: 'Номер*',
                type: 'tel',
                name: 'tel',
                placeholder: '+7(__) ___-__-__'
            },
            {
                title: 'Комментарий',
                type: 'textarea',
                name: 'comment',
                placeholder: 'Ваше сообщение'
            }
        ]
    },
};

function Form(settings) {
    this.popup = popup;
    this.wrapper = popupWrapper;
    this.template = $(tmpl.content).find('.form');
    this.form = this.template.clone();

    let that = this;

    this.init = function () {
        let title = that.form.find('.form__title'),
            sub = that.form.find('.form__sub'),
            hidden = that.form.find('.form__hidden');

        constructFields(settings.fields);
        that.form.attr('action', settings.href);
        title.text(settings.title);
        sub.text(settings.sub);
        hidden.val(settings.title);

        that.wrapper.html(that.form);

        that.popup.addClass('active');

        that.form.validate(
            {
                rules: {
                    name: "required",
                    tel: "required"
                },
                messages: {
                    name: "Необходимо указать Ваше имя",
                    tel: "Необходимо указать номер телефона"
                },
                submitHandler: function (form) {
                    let data = $(form).serialize(),
                        url = $(form).attr('action');

                    $.ajax({
                        dataType: "json",
                        type: "POST",
                        url: url,
                        data: data,
                        success: function (result) {
                            if (result.status) {
                                popupWrapper.html(result.html)
                            } else {
                                alert('Что-то пошло не так, попробуйте еще раз!!!');
                            }
                        },
                        error: function (result) {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    });
                },
            }
        );
        that.form.find('input[type=tel]').mask('+7 (999) 999-99-99');
    };

    function constructFields(params) {
        let fields = that.form.find('.form__fields').html('');
        params.forEach(function (item, i, arr) {
            fields.append(constructField(item));
        });

        return fields;
    }

    function constructField(params) {
        let field = getField(params.type),
            title = field.find('.form__field-title'),
            input = field.find('.form__field-input');
        title.text(params.title);
        input.attr('type', params.type);
        input.attr('name', params.name);
        input.attr('placeholder', params.placeholder);

        return field;
    }

    function getField(type) {
        let field = '';
        if (type === 'textarea') {
            field = $(that.template.find('.tmplArea')[0].cloneNode(true));
        } else {
            field = $(that.template.find('.tmplField')[0].cloneNode(true));
        }
        return field;
    }


}

$('body').on('click', '.jsCloseForm', function () {
    popup.removeClass('active');
    // wrapper.removeClass('ovhidden');
});

$('.jsCallback').on('click', function (e) {
    e.preventDefault();
    let id = $(this).data('id') || '1';

    // wrapper.addClass('ovhidden');

    let newForm = new Form(formsData[id]).init();
});
