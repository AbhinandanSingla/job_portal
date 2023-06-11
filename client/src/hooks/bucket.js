import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: "Add accessID",
    secretAccessKey: "Secret AccessKey"
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
