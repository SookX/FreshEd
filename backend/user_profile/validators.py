from django.core.exceptions import ValidationError

def image_extension_validator(image):
    if image:
        if image.name.split('.')[-1] not in ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG', 'webp', 'gif']:
            raise ValidationError('Invalid image format. Only jpg, jpeg, and png are allowed.')
    return image
