import helpers from './helpers.js';
var roomLink, roomCode;

window.addEventListener( 'load', () => {
    document.querySelector( '#toggle-chat-pane' ).addEventListener( 'click', ( e ) => {
        let chatElem = document.querySelector( '#chat-pane' );
        let mainSecElem = document.querySelector( '#main-section' );

        if ( chatElem.classList.contains( 'chat-opened' ) ) {
            chatElem.setAttribute( 'hidden', true );
            mainSecElem.classList.remove( 'col-md-9' );
            mainSecElem.classList.add( 'col-md-12' );
            chatElem.classList.remove( 'chat-opened' );
        }

        else {
            chatElem.attributes.removeNamedItem( 'hidden' );
            mainSecElem.classList.remove( 'col-md-12' );
            mainSecElem.classList.add( 'col-md-9' );
            chatElem.classList.add( 'chat-opened' );
        }

        setTimeout( () => {
            if ( document.querySelector( '#chat-pane' ).classList.contains( 'chat-opened' ) ) {
                helpers.toggleChatNotificationBadge();
            }
        }, 300 );
    } );

    //Toggling between dark and light themes
    const elem = document.getElementById('toggle-theme');
    document.getElementById('toggle-theme').addEventListener('click', () => {
        let themeStylesheet = document.getElementById('theme');
        let e = document.getElementById('toggle-theme-icon');
        // if it's light -> go dark
        if (themeStylesheet.href.includes('app')) {
            themeStylesheet.href = 'assets/css/darktheme.css'
            e.classList.remove( 'fa-moon' );
            e.classList.add( 'fa-sun' );
            elem.setAttribute( 'title', 'Light Mode');
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'assets/css/app.css'
            e.classList.remove( 'fa-sun' );
            e.classList.add( 'fa-moon' );
            elem.setAttribute( 'title', 'Dark Mode');
        }
    });
    
    //Accessibility Menu
    $('#acc-menu-btn').click(function() {
        $('.child-btn').toggleClass('scale-out');
    });
    $('#bigfont').click(function() {
        $('body').toggleClass('acc-1');
    });
    $('#dyslexia').click(function() {
        $('body').toggleClass('acc-2');
    });

    //When the video frame is clicked. This will enable picture-in-picture
    document.getElementById( 'local' ).addEventListener( 'click', () => {
        if ( !document.pictureInPictureElement ) {
            document.getElementById( 'local' ).requestPictureInPicture()
                .catch( error => {
                    // Video failed to enter Picture-in-Picture mode.
                    console.error( error );
                } );
        }
        else {
            document.exitPictureInPicture()
                .catch( error => {
                    // Video failed to leave Picture-in-Picture mode.
                    console.error( error );
                } );
        }
    } );


    //When the 'Create room" is button is clicked
    document.getElementById( 'create-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let roomName = document.querySelector( '#room-name' ).value;
        let yourName = document.querySelector( '#your-name' ).value;

        if ( roomName && yourName ) {
            document.getElementById('room-create').hidden = true;
            document.getElementById('username-set').hidden = true;
            document.querySelector('#link-code').attributes.removeNamedItem('hidden');
           
            //remove error message, if any
            document.querySelector( '#err-msg' ).innerHTML = "";

            //save the user's name in sessionStorage
            sessionStorage.setItem( 'username', yourName );
            
            //create room link
            roomCode = roomName.trim().replace( ' ', '_' ) +':'+ helpers.generateRandomString();
            roomLink = `${ location.origin }?room=${ roomCode.trim().replace( ':', '_' ) }`;
            //show message with link to room
            document.querySelector( '#room-code' ).value = roomCode;
            document.querySelector( '#room-created' ).value = roomLink;

            //empty the values
            document.querySelector( '#room-name' ).value = '';
            document.querySelector( '#your-name' ).value = '';
        }

        else {
            document.querySelector( '#err-msg' ).innerHTML = "All fields are required";
        }
    } );

    //When user enters his room after landing on sharing room details form
    document.getElementById( 'enter-my-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        location.replace(roomLink);
    } );

    //Share Code and Link
    $('#copy-code').click(function(){
        if (!navigator.clipboard){
            $(this).siblings('input.room-code').select();      
            document.execCommand("copy");
        }
        else{
            let tt = document.getElementById('room-code').value;
            navigator.clipboard.writeText(tt).then(
                function(){
                    document.getElementById('msg-sh-det').innerHTML="Copied Room Code to Clipboard!";
                })
              .catch(
                 function() {
                    alert("err");
              });
        }
    });
    $('#copy-link').click(function(){
        if (!navigator.clipboard){
            $(this).siblings('input.room-created').select();      
            document.execCommand("copy");
        }
        else{
            let tt = document.getElementById('room-created').value;
            navigator.clipboard.writeText(tt).then(
                function(){
                    document.getElementById('msg-sh-det').innerHTML="Copied Room Link to Clipboard!";
                })
              .catch(
                 function() {
                    alert("err");
              });
        }
    });

    //Sharing through social media
    function socialWindow(url) {
        var left = (screen.width - 570) / 2;
        var top = (screen.height - 570) / 2;
        var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
        window.open(url,"NewWindow",params);
    }
    $(".icoFacebook").click(function(){
        var url = "https://www.facebook.com/sharer.php?u=" + roomLink;
        socialWindow(url);
    });
    $(".icoTwitter").click(function() {
        var url = "https://twitter.com/intent/tweet?url=" + roomLink + "&text="+ encodeURIComponent('You are invited to a Glances Meet! Follow the link given below to join, or alternatively, use the Room Code ' + roomCode +' at the home page of Glances.');
        socialWindow(url);
    });
    $(".icoGoogle").click(function() {
        var url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=youremail@gmail.com&body="+ encodeURIComponent("You are invited to a Glances Meet! Follow this link to join -") + "%0A" + roomLink + "%0A" + encodeURIComponent("You can alternatively join by using the Room Code " + roomCode + " on the Glances Home Page.");
        socialWindow(url);
    });
    $(".icoWhatsapp").click(function() {
        var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent("You are invited to a Glances Meet! Follow this link to join -") + "%0A" + roomLink + "%0A" + encodeURIComponent("You can alternatively join by using the Room Code " + roomCode + " on the Glances Home Page.");
        socialWindow(url);
    });



    //When the 'Enter room' button is clicked.
    document.getElementById( 'enter-room' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let name = document.querySelector( '#username' ).value;
        sessionStorage.setItem( 'username', name );
        let rCode = document.querySelector( '#user-code' ).value;
        if(!rCode){document.querySelector( '#err-msg-username' ).innerHTML = "Please enter a valid room code";}
        let room_Link = `${ location.origin }?room=${ rCode.trim().replace( ':', '_' ) }`;
        const room = helpers.getQString( room_Link, 'room' );
        if ( name ) {
            //remove error message, if any
            document.querySelector( '#err-msg-username' ).innerHTML = "";
            location.replace(room_Link);            
        }

        else {
            document.querySelector( '#err-msg-username' ).innerHTML = "Please input your name";
        }
    } );

    //When the 'New User Enter room' button is clicked.
    document.getElementById( 'newuserenter' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();

        let name = document.querySelector( '#newusername' ).value;
        sessionStorage.setItem( 'username', name );
        
        if ( name ) {
            document.querySelector( '#err-msg-username' ).innerHTML = "";
            location.reload();            
        }

        else {
            document.querySelector( '#err-msg-username' ).innerHTML = "Please input your name";
        }
    } );


    document.addEventListener( 'click', ( e ) => {
        if ( e.target && e.target.classList.contains( 'expand-remote-video' ) ) {
            helpers.maximiseStream( e );
        }

        else if ( e.target && e.target.classList.contains( 'mute-remote-mic' ) ) {
            helpers.singleStreamToggleMute( e );
        }
    } );


    document.getElementById( 'closeModal' ).addEventListener( 'click', () => {
        helpers.toggleModal( 'recording-options-modal', false );
    } );

    document.getElementById( 'close-options' ).addEventListener( 'click', () => {
        helpers.toggleModal( 'recording-options-modal', false );
    } );
} );
