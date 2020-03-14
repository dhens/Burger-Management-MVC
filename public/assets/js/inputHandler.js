$( () => {

    $('.devour-burger').on('click', (event) => {
        const id = $(this).data('id');
        const nowDevoured = $(this).data('devoured');
        const devouredState = {
            devoured: nowDevoured
        };
        $.ajax('/api/burgers')
    })

    $('.create-form').on('submit', (event) => {
        event.preventDefault();
        const newBurger = {
            burger_name: $('#burg').val().trim(),
        }
        $.ajax('api/burgers', {
            type: 'POST',
            data: newBurger
        }).then( () => {
            console.log('Created new burger')
            location.reload();
        })
    })    
})

