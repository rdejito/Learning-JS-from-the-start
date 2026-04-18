## Write a function to hide a credit card number.

### Instructions

A credit card ussually consists of **16** digits.

To hide a credit card number, replace the first **12** digits with an asterisk `(*)` and keep the last four digits as it is.

Return the updated string with the first 12 characters replaced with asterisks `*`.

### Example

For this input

```
cardNumber = "1234567890123456"
```

the result should be:

```
"************3456"
```

**Reason**: Replacing the first 12 characters of `"1234567890123456"` results `"************3456"`.
