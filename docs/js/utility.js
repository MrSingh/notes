$(document).ready(function() {
    // Enable LinkedIn button after load
    $('#linkedin-share-btn').prop('disabled', false);

    // LinkedIn share button
    $('#linkedin-share-btn').click(function() {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        window.open(shareUrl, '_blank');
    });

    // Facebook share button
    $('#facebook-share-btn').click(function() {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(shareUrl, '_blank');
    });

    // Twitter share button
    $('#twitter-share-btn').click(function() {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check this out! ");
        const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        window.open(shareUrl, '_blank');
    });

    // Email share button
    $('#email-share-btn').click(function() {
        const url = window.location.href;
        const subject = encodeURIComponent("Check this out");
        const body = encodeURIComponent(`I thought you might find this interesting: ${url}`);
        const mailToUrl = `mailto:?subject=${subject}&body=${body}`;
        window.open(mailToUrl, '_self');
    });
    // Filter
    $('.tags').click(function() {
        var tag = $(this).data('tag');
        if (tag === 'reset') {
            $('.post').show(); // Show all posts
        } else {
            $('.post').hide(); // Hide all posts
            $('.post[data-tags*="' + tag + '"]').show(); // Show posts with the selected tag
        }
    });
});
