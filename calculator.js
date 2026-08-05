document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    function getNumbers() {
        const a = parseFloat(num1.value);
        const b = parseFloat(num2.value);
        if (isNaN(a) || isNaN(b)) {
            result.textContent = 'Please enter valid numbers';
            return null;
        }
        return [a, b];
    }

    document.getElementById('add').addEventListener('click', () => {
        const nums = getNumbers();
        if (nums) result.textContent = nums[0] + nums[1];
    });

    document.getElementById('sub').addEventListener('click', () => {
        const nums = getNumbers();
        if (nums) result.textContent = nums[0] - nums[1];
    });

    document.getElementById('mul').addEventListener('click', () => {
        const nums = getNumbers();
        if (nums) result.textContent = nums[0] * nums[1];
    });

    document.getElementById('div').addEventListener('click', () => {
        const nums = getNumbers();
        if (nums) {
            if (nums[1] === 0) {
                result.textContent = 'Cannot divide by zero';
            } else {
                result.textContent = nums[0] / nums[1];
            }
        }
    });

    document.getElementById('clear').addEventListener('click', () => {
        num1.value = '';
        num2.value = '';
        result.textContent = '';
    });
});     
             