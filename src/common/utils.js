export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Varun_Resume.pdf';
    link.download = 'Varun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};