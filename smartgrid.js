const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "40px",
    outputStyle: "scss",
    container: {
        maxWidth: "1220px",
        fields: "20px",
        containerWidth: "1220px"
    },
    breakPoints: {
        lg: {
            width: "1240px",
            fields: "20px",
            containerWidth: "768px"
        },
        md: {
            width: "991.99px",
            fields: "20px",
            containerWidth: "768px"
        },
        sm: {
            width: "790px",
            fields: "10px",
            containerWidth: "320px",
            offset: '10px'
        },
        xs: {
            width: "575.99px",
            fields: "10px",
            containerWidth: "320px",
            offset: '10px'
        }
    },
});