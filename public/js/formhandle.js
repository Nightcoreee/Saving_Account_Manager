$("#form").submit(function(e) {
    console.log('click')
    e.preventDefault();
    if(checkinput()){
        if(confirm(confirmMSG)) {
            var form = $(this);
            var actionUrl = form.attr('action');
            $.ajax({
                type: "POST",
                url: actionUrl,
                data: form.serialize(), // serializes the form's elements.
                success: function(data)
                {
                if(data.msg !== "succeed") alert(data.msg); 
                else {
                    alert(succeedMSG)
                    window.location.replace(redirectURL);
                }
                }
            });
        }
        else {

        }
    };
})
