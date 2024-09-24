function convertCurrency() {
    // Lấy dữ liệu từ form
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    // Tạo bảng tỷ giá giả định
    const exchangeRates = {
        VND: { USD: 0.000042, EUR: 0.000036 },
        USD: { VND: 23850, EUR: 0.85 },
        EUR: { VND: 28000, USD: 1.18 }
    };

    // Kiểm tra nếu người dùng nhập đúng số lượng
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Kiểm tra tỷ giá và tính toán
    let result;
    if (fromCurrency === toCurrency) {
        result = amount; // Nếu từ và đến là cùng một loại tiền
    } else {
        result = amount * exchangeRates[fromCurrency][toCurrency];
    }

    // Hiển thị kết quả
    document.getElementById("result").textContent = result.toFixed(2) + " " + toCurrency;
}
