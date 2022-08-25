import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: "AKIAQCMWXZIQOF2A2PM6",
    secretAccessKey: "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"
});

var s3 = new AWS.S3();

//configuring parameters


export function upload(file, jobTitle) {
    var params = {
        Bucket: 'rojgar',
        Body: file.preview,
        Key: "jobs/" + Date.now() + "_" + jobTitle
    };

    s3.upload(params, function (err, data) {
        //handle error
        if (err) {
            console.log("Error", err);
        }

        //success
        if (data) {
            console.log("Uploaded in:", data.Location);
            return data;
        }
    });
    return ''
}
