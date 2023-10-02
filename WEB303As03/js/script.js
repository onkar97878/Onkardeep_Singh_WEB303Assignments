function loadDataWithGetJSON() {
    $.getJSON('team.json', function(data) {
        var teamHtml = '';
        $.each(data, function (index, member) {
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
        $('#team').html(teamHtml);
    });
}

function loadDataWithAjax() {
    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            $('#team').html('Loading...');
        },
        error: function() {
            $('#team').html('The content could not be retrieved.');
        },
        success: function(data) {
            var teamHtml = '';
            $.each(data, function(index, member) {
                teamHtml += '<h2>' + member.name + '</h2>';
                teamHtml += '<h5>' + member.position + '</h5>';
                teamHtml += '<p>' + member.bio + '</p>';
            });
            $('#team').html(teamHtml);
        }
    });
}

$(document).ready(function() {
    loadDataWithGetJSON();
});