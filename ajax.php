<?php
header('Content-Type: application/json');

ob_start();
?>
    <form class="form">
        <button class="form__close jsCloseForm" type="button"><img class="form__close-svg" src="images/icons/close-form.svg" alt=""/>
        </button>
        <div class="form__wrap">
            <div class="form__top">
                <div class="form__title"><?=$_POST['title']?></div>
            </div>
            <div class="form__bottom">
                <div class="form__accept"><img class="form__accept-img" src="images/icons/accept.svg" alt=""/>
                    <div class="form__accept-title">Спасибо!</div>
                    <div class="form__accept-txt">Ваше сообщение отправлено!</div>
                </div>
                <button class="btn2 form__submit jsCloseForm" type="button"><span class="btn2__text">закрыть</span></button>
            </div>
        </div>
    </form>
<?
$html = ob_get_contents();
ob_end_clean();


echo json_encode(array(
    'status' => true,
    'html' => $html
));
exit();