import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application!",
      settings: "Settings",
      theme: "Theme",
      timezone: "Timezone",
      language: "Language",
      save: "Save Settings",
      contactUsTitle: "Contact Alexi",
      metadataExtraction: "Metadata Extraction",
      viewGithubRepo: "View the GitHub Repository",
      uploadSuccess: "Image successfully uploaded!",
      uploadFailure: "Failed to save image metadata.",
      updateSuccess: "Image data successfully updated!",
      updateFailure: "Failed to update image data.",
      deleteSuccess: "Image successfully deleted!",
      deleteFailure: "Failed to delete image.",
      copySuccess: "Metadata copied to clipboard!",
      internalServerError: "Internal Server Error: Unable to extract metadata",
      processError: "Error: Unable to process request",
      copyToClipboard: "Copy to Clipboard",
      tagAdded: "Tag added",
      dragAndDrop: "Drag & drop images here, or click to select",
      description: "Description",
      tags: "Tags:",
      aiImageRecognition: "AI Image Recognition",
      extractImageMetadata: "Extract Image Metadata",
      saveChanges: "Save Changes",
      deleteImage: "Delete Image",
      uploadedImages: "Uploaded Images",
      alexisWorld: "Alexi's World",
      loading: "Loading...",
      userProfile: "User Profile",
      email: "Email",
      name: "Name",
      darkTheme: "Dark Theme",
      lightTheme: "Light Theme",
      themeUpdated: "Theme updated successfully.",
      themeUpdateFailed: "Failed to update theme.",
      profileUpdated: "Profile updated successfully.",
      profileUpdateFailed: "Failed to update profile.",
      userDetailsFetchFailed: "Failed to fetch user details.",
      loginTitle: "Login",
      password: "Password",
      login: "Login",
      signUp: "Sign Up",
      loginFailed: "Login failed: {{error}}",
      signUpTitle: "Sign Up",
      invitationCode: "Invitation Code",
      emailInUse: "Email is already in use.",
      invalidInvite: "Invalid or already used invite code.",
      signUpSuccess: "User signed up successfully.",
      signUpFailed: "Sign up failed: {{error}}",
      requestAccessTitle: "Request Access",
      submit: "Submit",
      validEmail: "Please enter a valid email address.",
      pendingRequest:
        "Your request is pending. An admin will be with you soon.",
      deniedRequest:
        "Your request has been denied. Please contact support for more information.",
      existingUser: "This email is already associated with an existing user.",
      accessSubmitted: "Your access request has been submitted.",
      submitError:
        "There was an error submitting your request. Please try again later.",
      successRequest: "Access request submitted successfully.",
      loginTab: "Login",
      signUpTab: "Sign Up",
      requestAccessTab: "Request Access",
      extractorTool: "Extractor Tool",
      chats: "Chats",
      profile: "Profile",
      logout: "Logout",
      admin: "Admin",
      accountOfCurrentUser: "Account of current user",
    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a nuestra aplicación!",
      settings: "Configuraciones",
      theme: "Tema",
      timezone: "Zona horaria",
      language: "Idioma",
      save: "Guardar configuraciones",
      contactUsTitle: "Contact Alexi",
      metadataExtraction: "Extracción de Metadatos",
      viewGithubRepo: "Ver el Repositorio en GitHub",
      uploadSuccess: "¡Imagen subida con éxito!",
      uploadFailure: "Error al guardar los metadatos de la imagen.",
      updateSuccess: "¡Datos de la imagen actualizados con éxito!",
      updateFailure: "Error al actualizar los datos de la imagen.",
      deleteSuccess: "¡Imagen eliminada con éxito!",
      deleteFailure: "Error al eliminar la imagen.",
      copySuccess: "¡Metadatos copiados al portapapeles!",
      internalServerError:
        "Error Interno del Servidor: No se pueden extraer los metadatos",
      processError: "Error: No se puede procesar la solicitud",
      copyToClipboard: "Copiar al Portapapeles",
      tagAdded: "Etiqueta añadida",
      dragAndDrop:
        "Arrastra y suelta imágenes aquí, o haz clic para seleccionar",
      description: "Descripción",
      tags: "Etiquetas:",
      aiImageRecognition: "Reconocimiento de Imagen AI",
      extractImageMetadata: "Extraer Metadatos de Imagen",
      saveChanges: "Guardar Cambios",
      deleteImage: "Eliminar Imagen",
      uploadedImages: "Imágenes Subidas",
      alexisWorld: "El Mundo de Alexi",
      loading: "Cargando...",
      userProfile: "Perfil de Usuario",
      email: "Correo electrónico",
      name: "Nombre",
      darkTheme: "Tema Oscuro",
      lightTheme: "Tema Claro",
      themeUpdated: "Tema actualizado con éxito.",
      themeUpdateFailed: "Error al actualizar el tema.",
      profileUpdated: "Perfil actualizado con éxito.",
      profileUpdateFailed: "Error al actualizar el perfil.",
      userDetailsFetchFailed: "Error al obtener detalles del usuario.",
      loginTitle: "Iniciar Sesión",
      password: "Contraseña",
      login: "Iniciar Sesión",
      signUp: "Registrarse",
      loginFailed: "Error al iniciar sesión: {{error}}",
      signUpTitle: "Registrarse",
      invitationCode: "Código de Invitación",
      emailInUse: "El correo electrónico ya está en uso.",
      invalidInvite: "Código de invitación inválido o ya usado.",
      signUpSuccess: "Usuario registrado con éxito.",
      signUpFailed: "Error en el registro: {{error}}",
      requestAccessTitle: "Solicitar Acceso",
      submit: "Enviar",
      validEmail:
        "Por favor, introduce una dirección de correo electrónico válida.",
      pendingRequest:
        "Tu solicitud está pendiente. Un administrador estará contigo pronto.",
      deniedRequest:
        "Tu solicitud ha sido denegada. Por favor, contacta con soporte para más información.",
      existingUser:
        "Este correo electrónico ya está asociado a un usuario existente.",
      accessSubmitted: "Tu solicitud de acceso ha sido enviada.",
      submitError:
        "Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde.",
      successRequest: "Solicitud de acceso enviada con éxito.",
      loginTab: "Iniciar Sesión",
      signUpTab: "Registrarse",
      requestAccessTab: "Solicitar Acceso",
      extractorTool: "Herramienta Extractora",
      chats: "Chats",
      profile: "Perfil",
      logout: "Cerrar Sesión",
      admin: "Administración",
      accountOfCurrentUser: "Cuenta del usuario actual",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
