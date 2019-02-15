//Public js

// public delete button
function deleteLog(data, index,el) {
    var str = `<div class="db">
                    <div class="delete">
                        <h5>Comfirm Delete?</h5>
                        <div class="delelte_content">Are you sure wish to delete?</div>
                        <div class="oper">
                            <span class="delete_button">Delete</span>
                            <span class="cancel_button">Cancel</span>
                        </div>
                    </div>
                </div>`;
    $('body').append(str);
    $('.cancel_button').click(function () {
        $('.db').remove();
    })
    $('.delete_button').click(function () {
        var dataList = data.filter((item, i) => {
            return item.id !== index;
        })
        $('.db').remove();
        $(el).remove();
    })
}