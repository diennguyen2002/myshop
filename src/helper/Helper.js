function formatMoney(value){
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ';
}

const Helper = {
    formatMoney
}

export default Helper;