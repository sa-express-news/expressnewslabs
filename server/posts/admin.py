from django.contrib import admin
from .models import Post, HomepageFeature


class LimitHPFeatures(admin.ModelAdmin):
  def has_add_permission(self, request):
    num_objects = self.model.objects.count()
    if num_objects >= 3:
      return False
    else:
      return True

admin.site.register(Post)
admin.site.register(HomepageFeature, LimitHPFeatures)
