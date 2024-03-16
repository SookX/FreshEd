import user_profile.models
import user_profile.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0002_useraccount_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='profile_picture',
            field=models.ImageField(blank=True, default='default.png', null=True, upload_to=user_profile.models.server_icon_upload_path, validators=[user_profile.validators.image_extension_validator]),
        ),
    ]