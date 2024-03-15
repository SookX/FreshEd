from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


def server_icon_upload_path(instance, filename):
    return f"user/{instance.id}/profile_picutre/{filename}"


class UserAccountManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, role, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name, last_name=last_name, role=role)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, first_name, last_name, role, password=None):

        user = self.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            role=role,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    role = models.BooleanField(default=0)
    is_staff = models.BooleanField(default=False)
    profile_picture = models.ImageField(upload_to=server_icon_upload_path, blank=True, null=True)

    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'role']

    def get_first_name(self):
        return self.first_name

    def get_last_name(self):
        return self.last_name
    
    def __str__(self):
        return self.email
