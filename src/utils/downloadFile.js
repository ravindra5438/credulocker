import * as FileSystem from "expo-file-system";

export const downloadFile = async (pdfLink, setDownloadState) => {
  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setDownloadState({
      downloadProgress: progress,
    });
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    pdfLink,
    FileSystem.documentDirectory + "small.pdf",
    {},
    callback
  );

  try {
    const { uri } = await downloadResumable.downloadAsync();
    console.log("Finished downloading to ", uri);
  } catch (e) {
    console.error(e);
  }
};
