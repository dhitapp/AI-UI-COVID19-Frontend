import * as yup from "yup"

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"]
export const MAX_IMAGE_SIZE = 52428800

export const PredictSubmissionSchema = yup.object().shape({
  jenis_kelamin: yup.string().required("Choose one"),
  demam: yup.string().required("Choose one"),
  batuk: yup.string().required("Choose one"),
  pilek: yup.string().required("Choose one"),
  sakit_tenggorokan: yup.string().required("Choose one"),
  menggigil: yup.string().required("Choose one"),
  sakit_kepala: yup.string().required("Choose one"),
  lemah: yup.string().required("Choose one"),
  mual: yup.string().required("Choose one"),
  diare: yup.string().required("Choose one"),
  sesak: yup.string().required("Choose one"),
  nyeri_otot: yup.string().required("Choose one"),
  nyeri_abdomen: yup.string().required("Choose one"),
  lainnya: yup.string().required("Required. If none, write 'Tidak ada'"),
  penyerta: yup.string().required("Required. If none, write 'Tidak ada'"),
  umur: yup
    .number()
    .typeError("Required")
    .positive("Must be greater than zero")
    .required("Required"),
  suhu: yup
    .number()
    .typeError("Required")
    .positive("Must be greater than zero")
    .required("Required"),
  interpret: yup
    .string()
    .required("Required. If none, write 'Tidak ada interpretasi.'"),
  image: yup
    .mixed()
    .test(
      "is-in-the-right-size",
      "Ukuran gambar terlalu besar. Ukuran gambar tidak boleh melebihi 50 MB.",
      value => !value || value.size <= MAX_IMAGE_SIZE
    )
    .test(
      "is-in-the-right-format",
      "Gambar harus dalam format jpg, jpeg, gif, atau png.",
      value => !value || SUPPORTED_FORMATS.includes(value.type)
    ),
})
