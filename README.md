# Feedback form BETA

*Demo:* http://vmalyshev.pro/feedbackform/


### Basic configuration

```
<div class="myform"></div>

<script src="form.js"></script>
<script>
  window.feedbackConfig = {
    element: '.myform', // form dom selector
    email: 'mail@example.com', // site owner email to receive messages
    fields: [
      {
        name: 'Name', // label name
        type: 'text', // text or textarea
        validation: 'name', // validation rule alias
        error: 'Please input your name', // validation error text
        key: 'name', // field name
      },
      {
        name: 'Email',
        type: 'text',
        validation: 'email',
        error: 'Please enter valid email',
        key: 'email',
      },
      {
        name: 'Comment',
        type: 'textarea',
        validation: 'text',
        error: 'Your comment shold be little longer',
        key: 'comment',
      },
    ],
    messages: {
      success: "Form submit success", // submit success message
      error: "Network error", // if API fail
    },
  };
</script>
```

### Validation types

- **name** - 3+ chars

- **email** - email pattern

- **text** - 10+ chars
