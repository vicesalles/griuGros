document.addEventListener('DOMContentLoaded', function () {
    
    const mailchimp = document.querySelector('#mailchimp');
    const slack = document.querySelector('#slack');

    function clickListener(el) {
        el.addEventListener('click', () => {
            ga('send', 'event', 'botó', 'click', el.name);
        });
    }

    clickListener(mailchimp);
    clickListener(slack);

});